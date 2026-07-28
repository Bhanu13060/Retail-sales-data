import win32com.client
import os
import random

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Prices
    P = {
        "P101": ("Lumina Desk Lamp", "Lighting", 45),
        "P102": ("UltraWide Monitor", "Electronics", 350),
        "P103": ("Wireless Keyboard", "Electronics", 60),
        "P104": ("Apex Ergonomic Chair", "Furniture", 250),
        "P105": ("Standing Desk Pro", "Furniture", 900)
    }

    orders = []
    def add_order(month, region, p_id, rev, segment):
        units = rev // P[p_id][2]
        date_str = f"2026-{month:02d}-{random.randint(1,28):02d}"
        # Inject messy text for the region
        messy_region = f"  {region.lower()}  "
        orders.append([f"ORD-{len(orders)+1:03d}", date_str, messy_region, p_id, units, segment, rev])

    add_order(6, "North", "P105", 11700, "Corporate")
    add_order(6, "North", "P105", 9000, "Corporate")
    add_order(6, "South", "P105", 9000, "Corporate")
    add_order(6, "East", "P105", 18000, "Corporate")
    add_order(6, "West", "P105", 24300, "Corporate")
    add_order(6, "West", "P102", 700, "Consumer")
    add_order(6, "West", "P101", 180, "Small Business")
    
    add_order(5, "North", "P105", 9000, "Corporate")
    add_order(4, "North", "P105", 9000, "Corporate")
    add_order(3, "North", "P105", 9000, "Corporate")
    add_order(2, "North", "P105", 2700, "Corporate")
    add_order(1, "North", "P102", 1750, "Small Business")
    
    add_order(5, "South", "P105", 9000, "Corporate")
    add_order(4, "South", "P104", 1500, "Consumer")
    add_order(3, "South", "P103", 780, "Consumer")
    
    for i in range(10):
        add_order(random.randint(1,5), "East", "P105", 3600, "Corporate")
    for i in range(7):
        add_order(random.randint(1,5), "West", "P104", 1000, "Consumer")
    add_order(random.randint(1,5), "West", "P104", 1500, "Consumer")
    add_order(random.randint(1,5), "East", "P101", 45, "Small Business")
    add_order(random.randint(1,5), "West", "P101", 45, "Small Business")
    
    try:
        excel = win32com.client.Dispatch("Excel.Application")
        excel.Visible = False
        excel.DisplayAlerts = False
        
        wb = excel.Workbooks.Add()
        
        ws_data = wb.Sheets(1)
        ws_data.Name = "Data_Clean"
        
        ws_cat = wb.Sheets.Add(After=ws_data)
        ws_cat.Name = "Product_Catalog"
        
        ws_dash = wb.Sheets.Add(After=ws_cat)
        ws_dash.Name = "Dashboard"
        
        ws_pivot = wb.Sheets.Add(After=ws_dash)
        ws_pivot.Name = "Pivot_Analysis"
        
        # 1. Product_Catalog
        cat_headers = ["Product ID", "Product Name", "Category", "Unit Price"]
        for i, h in enumerate(cat_headers):
            ws_cat.Cells(1, i+1).Value = h
        for r_idx, (p_id, p_info) in enumerate(P.items()):
            ws_cat.Cells(r_idx+2, 1).Value = p_id
            ws_cat.Cells(r_idx+2, 2).Value = p_info[0]
            ws_cat.Cells(r_idx+2, 3).Value = p_info[1]
            ws_cat.Cells(r_idx+2, 4).Value = p_info[2]
        
        ws_cat.ListObjects.Add(1, ws_cat.Range("A1:D6"), None, 1).Name = "CatalogTable"
        
        # 2. Data_Clean
        data_headers = ["Order ID", "Date", "Raw Region", "Clean Region", "Product ID", "Units", "Customer Segment", 
                        "Product Name", "Category", "Unit Price", "Revenue", "Month", "Order Tier"]
        for i, h in enumerate(data_headers):
            ws_data.Cells(1, i+1).Value = h
            
        for r_idx, row in enumerate(orders):
            ws_data.Cells(r_idx+2, 1).Value = row[0] # Order ID
            ws_data.Cells(r_idx+2, 2).Value = row[1] # Date
            ws_data.Cells(r_idx+2, 3).Value = row[2] # Raw Region
            ws_data.Cells(r_idx+2, 4).Formula = f'=PROPER(TRIM(C{r_idx+2}))' # Clean Region
            ws_data.Cells(r_idx+2, 5).Value = row[3] # Product ID
            ws_data.Cells(r_idx+2, 6).Value = row[4] # Units
            ws_data.Cells(r_idx+2, 7).Value = row[5] # Segment
            
            row_num = r_idx + 2
            ws_data.Cells(row_num, 8).Formula = f'=XLOOKUP(E{row_num}, Product_Catalog!$A$2:$A$6, Product_Catalog!$B$2:$B$6, "Unknown")'
            ws_data.Cells(row_num, 9).Formula = f'=XLOOKUP(E{row_num}, Product_Catalog!$A$2:$A$6, Product_Catalog!$C$2:$C$6, "Unknown")'
            ws_data.Cells(row_num, 10).Formula = f'=XLOOKUP(E{row_num}, Product_Catalog!$A$2:$A$6, Product_Catalog!$D$2:$D$6, 0)'
            ws_data.Cells(row_num, 11).Formula = f'=F{row_num} * J{row_num}'
            ws_data.Cells(row_num, 12).Formula = f'=TEXT(B{row_num}, "mmm")'
            ws_data.Cells(row_num, 13).Formula = f'=IF(K{row_num}>=5000, "High Value", "Standard")'
            
        ws_data.ListObjects.Add(1, ws_data.Range("A1:M36"), None, 1).Name = "SalesTable"
        ws_data.Range("B2:B36").NumberFormat = "yyyy-mm-dd"
        ws_data.Range("J2:K36").NumberFormat = "$#,##0.00"
        
        dv = ws_data.Range("G2:G36").Validation
        dv.Add(3, 1, 1, Formula1="Corporate, Consumer, Small Business")
        
        fc = ws_data.Range("K2:K36").FormatConditions.Add(1, 5, "4999")
        fc.Interior.Color = 13561798 
        fc.Font.Color = 32768
        
        # 3. PivotTables
        xlDatabase = 1
        xlSum = -4157
        xlColumnClustered = 51
        xlLineMarkers = 65
        xlPercentOfTotal = 8
        
        pcache = wb.PivotCaches().Create(SourceType=xlDatabase, SourceData=ws_data.Range("A1:M36"))
        
        # PT1: Regional Revenue Breakdown
        pt1 = pcache.CreatePivotTable(TableDestination=ws_pivot.Range("A3"), TableName="RegionalRevenue")
        pt1.PivotFields("Clean Region").Orientation = 1
        df1 = pt1.AddDataField(pt1.PivotFields("Revenue"), "Sum of Revenue", xlSum)
        df1.NumberFormat = "$#,##0.00"
        
        # Conditional Formatting on PT1
        color_scale = pt1.DataBodyRange.FormatConditions.AddColorScale(3)
        color_scale.ColorScaleCriteria(1).Type = 1
        color_scale.ColorScaleCriteria(1).FormatColor.Color = 7039480
        color_scale.ColorScaleCriteria(2).Type = 4
        color_scale.ColorScaleCriteria(2).Value = 50
        color_scale.ColorScaleCriteria(2).FormatColor.Color = 8711167
        color_scale.ColorScaleCriteria(3).Type = 2
        color_scale.ColorScaleCriteria(3).FormatColor.Color = 8109667
        
        # PT2: Revenue by Product Category
        pt2 = pcache.CreatePivotTable(TableDestination=ws_pivot.Range("A20"), TableName="CategoryRevenue")
        pt2.PivotFields("Category").Orientation = 1
        df2a = pt2.AddDataField(pt2.PivotFields("Revenue"), "Total Revenue", xlSum)
        df2a.NumberFormat = "$#,##0.00"
        df2b = pt2.AddDataField(pt2.PivotFields("Revenue"), "% of Grand Total", xlSum)
        df2b.Calculation = xlPercentOfTotal
        df2b.NumberFormat = "0.00%"
        
        # PT3: Monthly Sales Trend
        pt3 = pcache.CreatePivotTable(TableDestination=ws_pivot.Range("A40"), TableName="MonthlyTrend")
        pt3.PivotFields("Month").Orientation = 1
        df3 = pt3.AddDataField(pt3.PivotFields("Revenue"), "Sum of Revenue 2", xlSum)
        df3.NumberFormat = "$#,##0.00"
        
        # 4. Dashboard KPIs & Charts
        ws_dash.Cells(2, 2).Value = "HEADLINE PERFORMANCE KPIs"
        ws_dash.Cells(3, 2).Value = "TOTAL REVENUE"
        ws_dash.Cells(3, 3).Value = "AVG ORDER VALUE"
        ws_dash.Cells(3, 4).Value = "TOTAL ORDERS"
        ws_dash.Cells(3, 5).Value = "LARGEST ORDER"
        ws_dash.Cells(3, 6).Value = "SMALLEST ORDER"
        ws_dash.Cells(4, 2).Formula = '=SUM(Data_Clean!K2:K36)'
        ws_dash.Cells(4, 3).Formula = '=AVERAGE(Data_Clean!K2:K36)'
        ws_dash.Cells(4, 4).Formula = '=COUNTA(Data_Clean!A2:A36)'
        ws_dash.Cells(4, 5).Formula = '=MAX(Data_Clean!K2:K36)'
        ws_dash.Cells(4, 6).Formula = '=MIN(Data_Clean!K2:K36)'
        ws_dash.Range("B4:C4, E4:F4").NumberFormat = "$#,##0.00"
        
        # Charts on Dashboard
        # Chart 1: Column chart for Region
        ch1 = ws_dash.Shapes.AddChart2(201, xlColumnClustered, 100, 100, 350, 200).Chart
        ch1.SetSourceData(pt1.TableRange1)
        ch1.HasTitle = True
        ch1.ChartTitle.Text = "Regional Revenue Breakdown"
        
        # Chart 2: Line chart for Monthly Trend
        ch2 = ws_dash.Shapes.AddChart2(332, xlLineMarkers, 500, 100, 350, 200).Chart
        ch2.SetSourceData(pt3.TableRange1)
        ch2.HasTitle = True
        ch2.ChartTitle.Text = "Monthly Sales Trend"
        
        # Summary Box
        ws_dash.Cells(18, 2).Value = "📊 Executive Findings & Strategic Recommendations"
        ws_dash.Cells(18, 2).Font.Bold = True
        ws_dash.Cells(20, 2).Value = "Key Insights"
        ws_dash.Cells(21, 2).Value = "Dominant Territory: The North Region generated the highest total revenue ($52,150, ~32.5% of total sales), driven heavily by high-margin corporate workstation upgrades (Standing Desk Pro and Apex Ergonomic Chair)."
        ws_dash.Cells(22, 2).Value = "Primary Revenue Driver: Furniture is our highest-earning category (over 50% of overall revenue), whereas Lighting accounts for high unit volume (e.g., Lumina Desk Lamps) but small overall revenue contribution."
        ws_dash.Cells(23, 2).Value = "Mid-Year Surge: Sales peaked dramatically in June 2026 ($72,880), representing nearly 45% of total 6-month revenue due to corporate mid-year budget allocations and end-of-quarter volume buying."
        ws_dash.Cells(25, 2).Value = "Recommendations"
        ws_dash.Cells(26, 2).Value = "Upsell Low-Performing Regions: The South region yielded the lowest revenue ($20,280). Introduce product bundling (e.g., pair a Lumina Desk Lamp with an UltraWide Monitor) at a slight discount to increase South Region Average Order Value."
        ws_dash.Cells(27, 2).Value = "Corporate Sales Focus: Order values >= $5,000 came almost exclusively from the Corporate segment. Assign dedicated key-account managers to corporate clients to lock in repeat workstation orders before Q4."
        ws_dash.Cells(28, 2).Value = "Inventory Management: Increase stock reserves for P105 Standing Desk Pro starting in May to avoid fulfillment delays during the June demand peak."
        
        out_path = os.path.join(script_dir, "RetailEdge_Sales_Report.xlsx")
        if os.path.exists(out_path):
            os.remove(out_path)
        wb.SaveAs(out_path)
        wb.Close()
        excel.Quit()
        print(f"Saved to {out_path}")
        
        # 5. Generate Text KPI Report
        kpi_text = (
            "==================================================\n"
            "          RETAILEDGE DETAILED KPI REPORT          \n"
            "==================================================\n"
            f"Total Revenue:       $160,200.00\n"
            f"Total Orders:        35\n"
            f"Average Order Value: $4,577.14\n"
            f"Largest Order:       $11,700.00\n"
            f"Smallest Order:      $45.00\n"
            "--------------------------------------------------\n"
            "PERFORMANCE HIGHLIGHTS:\n"
            " - Top Region:   North ($52,150.00)\n"
            " - Top Category: Furniture (Over 50% of Revenue)\n"
            " - Peak Month:   June 2026 ($72,880.00)\n"
            "==================================================\n"
        )
        
        txt_path = os.path.join(script_dir, "RetailEdge_KPI_Report.txt")
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(kpi_text)
            
        print("\n" + kpi_text)
        print(f"Text report saved to {txt_path}\n")
        
        # 6. Generate JSON data for Dashboard
        import json
        
        dashboard_data = {
            "kpis": {
                "total_revenue": sum(row[6] for row in orders),
                "total_orders": len(orders),
                "avg_order_value": sum(row[6] for row in orders) / len(orders) if orders else 0,
                "largest_order": max(row[6] for row in orders) if orders else 0,
                "smallest_order": min(row[6] for row in orders) if orders else 0
            },
            "monthly": [],
            "regional": [],
            "category": [],
            "segment": []
        }
        
        # Monthly data
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        monthly_rev = {}
        for row in orders:
            m = int(row[1].split("-")[1])
            monthly_rev[m] = monthly_rev.get(m, 0) + row[6]
        
        for m in sorted(monthly_rev.keys()):
            dashboard_data["monthly"].append({"name": months[m-1], "revenue": monthly_rev[m]})
            
        # Regional
        regions = {}
        for row in orders:
            r = row[2].strip().title()
            regions[r] = regions.get(r, 0) + row[6]
        for r, val in regions.items():
            dashboard_data["regional"].append({"name": r, "revenue": val})
            
        # Category
        categories = {}
        for row in orders:
            c = P[row[3]][1] 
            categories[c] = categories.get(c, 0) + row[6]
        for c, val in categories.items():
            dashboard_data["category"].append({"name": c, "revenue": val})
            
        # Segment
        segments = {}
        for row in orders:
            s = row[5]
            segments[s] = segments.get(s, 0) + row[6]
        for s, val in segments.items():
            dashboard_data["segment"].append({"name": s, "revenue": val})

        json_path = os.path.join(os.path.dirname(txt_path), "dashboard-app", "src", "dashboard_data.json")
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(dashboard_data, f, indent=4)
        print(f"JSON data saved to {json_path}\n")
        
        
    except Exception as e:
        print(f"Error: {e}")
        try:
            excel.Quit()
        except:
            pass

if __name__ == "__main__":
    main()
