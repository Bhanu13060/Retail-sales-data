import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_pdf(filename="Mini_Project_Submission.pdf"):
    # Target page setup: Letter size with 0.75 in (54 pt) margins
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=54,
        leftMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=1,  # Center
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        alignment=1,  # Center
        spaceAfter=15,
        textColor=colors.HexColor("#334155")
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        spaceBefore=10,
        spaceAfter=3,
        textColor=colors.HexColor("#1e3a8a")  # Deep Navy Blue
    )

    body_text = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        spaceAfter=8,
        textColor=colors.HexColor("#1e293b")
    )

    form_label = ParagraphStyle(
        'FormLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor("#0f172a")
    )

    form_value = ParagraphStyle(
        'FormValue',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor("#334155")
    )

    declaration_text = ParagraphStyle(
        'DeclarationText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=13.5,
        spaceAfter=8,
        textColor=colors.HexColor("#475569")
    )

    story = []

    # Title & Subtitle
    story.append(Paragraph("AVISHKARNA INTERNSHIP PROGRAM", title_style))
    story.append(Paragraph("Mini Project Submission Format", subtitle_style))

    # Form Fields Table
    form_data = [
        [Paragraph("Student Name:", form_label), Paragraph("Bhanu venkat", form_value)],
        [Paragraph("College Name:", form_label), Paragraph("____________________________________________________", form_value)],
        [Paragraph("Branch & Year:", form_label), Paragraph("____________________________________________________", form_value)],
        [Paragraph("Roll Number:", form_label), Paragraph("____________________________________________________", form_value)],
        [Paragraph("Email ID:", form_label), Paragraph("bhanuvenkatsingamsetty@gmail.com", form_value)],
        [Paragraph("Mobile Number:", form_label), Paragraph("____________________________________________________", form_value)],
        [Paragraph("Project Title:", form_label), Paragraph("RetailEdge Sales Report & Executive KPI Dashboard", form_value)],
        [Paragraph("Project Domain:", form_label), Paragraph("Data Analysis, Business Intelligence & Web Development", form_value)],
    ]

    form_table = Table(form_data, colWidths=[110, 370])
    form_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(form_table)
    story.append(Spacer(1, 10))

    # Project Objective
    story.append(Paragraph("Project Objective", section_heading))
    story.append(Paragraph(
        "The objective of this project is to automate the ingestion, cleaning, and reporting of retail transaction data. "
        "The system standardizes raw logs, performs dynamic catalog lookups, and automatically builds structured Excel "
        "sheets featuring charts, custom formulas, and pivot analyses. It also publishes an interactive React web dashboard "
        "to present key executive performance summaries to stakeholders.",
        body_text
    ))

    # Components / Software Used
    story.append(Paragraph("Components / Software Used", section_heading))
    story.append(Paragraph(
        "<b>Programming & Scripting:</b> Python 3.11, JavaScript (React 19, Vite, Recharts, Lucide)<br/>"
        "<b>Libraries/APIs:</b> win32com.client (pywin32) for Microsoft Excel automation, json, os, random<br/>"
        "<b>Storage:</b> Excel (.xlsx) spreadsheets, dashboard_data.json data bridge<br/>"
        "<b>Tools:</b> Git, GitHub, VS Code editor",
        body_text
    ))

    # Working Principle
    story.append(Paragraph("Working Principle", section_heading))
    story.append(Paragraph(
        "The project has a pipeline of four automated stages:<br/>"
        "1. <i>Data Generation:</i> A script generates synthetic transaction logs with messy string values.<br/>"
        "2. <i>Excel Processing:</i> Python calls the local Microsoft Excel COM interface to clean regions and run lookups.<br/>"
        "3. <i>Report Rendering:</i> Excel compiles three pivot sheets, creates custom visual trend charts, and outputs a flat text report.<br/>"
        "4. <i>Dashboard visualization:</i> A local Python web server displays a React dashboard loading the live data.",
        body_text
    ))

    # Results
    story.append(Paragraph("Results", section_heading))
    story.append(Paragraph(
        "• Professionally formatted <b>RetailEdge_Sales_Report.xlsx</b> featuring dynamic pivot tables, formatting rules, and visual charts.<br/>"
        "• Structured summary text file <b>RetailEdge_KPI_Report.txt</b> identifying critical sales, averages, and territory peaks.<br/>"
        "• Live-updating interactive web dashboard showing month-by-month and division breakdowns.",
        body_text
    ))

    # Project Submission
    story.append(Paragraph("Project Submission", section_heading))
    story.append(Paragraph(
        "Source code and pre-compiled dashboard assets are published at the GitHub link below.",
        body_text
    ))

    # Source Code Link
    story.append(Paragraph("Source Code Link", section_heading))
    story.append(Paragraph("https://github.com/Bhanu13060/Retail-sales-data", body_text))

    # Demo Video
    story.append(Paragraph("Demo Video", section_heading))
    story.append(Paragraph("____________________________________________________ (Optional)", body_text))

    # Challenges Faced
    story.append(Paragraph("Challenges Faced", section_heading))
    story.append(Paragraph(
        "• Rebuilding a broken virtual environment that had absolute paths hardcoded for a foreign machine.<br/>"
        "• Transitioning absolute outputs in the Excel scripting to compute paths relative to the current file location.<br/>"
        "• Providing access to the React dashboard on machines missing Node.js by scripting a local Python HTTP fallback server.",
        body_text
    ))

    # Future Scope
    story.append(Paragraph("Future Scope", section_heading))
    story.append(Paragraph(
        "• Upgrading data pipelines to interface directly with active SQL databases instead of generated static listings.<br/>"
        "• Implementing email triggers in the python script to automatically distribute reports to managers.<br/>"
        "• Restructuring dashboard routes to include role-based login authorization.",
        body_text
    ))

    # Declaration Block (KeepTogether to prevent splitting)
    decl_elements = [
        Spacer(1, 10),
        Paragraph("Declaration", section_heading),
        Paragraph("I declare that this project is my own work.", declaration_text),
        Spacer(1, 8),
    ]
    
    # Signature layout
    sig_data = [
        [Paragraph("<b>Student Signature:</b> Bhanu venkat", form_label), Paragraph("<b>Date:</b> July 28, 2026", form_label)]
    ]
    sig_table = Table(sig_data, colWidths=[240, 240])
    sig_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    decl_elements.append(sig_table)
    
    decl_elements.append(Spacer(1, 8))
    
    story.append(KeepTogether(decl_elements))

    # Build the document
    doc.build(story)
    print("PDF Generation complete.")

if __name__ == "__main__":
    create_pdf()
