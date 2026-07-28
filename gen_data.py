import random

# Catalog:
# P101: Lumina Desk Lamp (Lighting, 45)
# P102: UltraWide Monitor (Electronics, 300)
# P103: Wireless Keyboard (Electronics, 60)
# P104: Apex Ergonomic Chair (Furniture, 450)
# P105: Standing Desk Pro (Furniture, 900)

prices = {"P101": 45, "P102": 300, "P103": 60, "P104": 450, "P105": 900}

# Target:
# Total = 160200
# Max = 11700
# North = 52150
# South = 20280
# June = 72880

# We need 35 rows.
rows = []

def add_order(month, region, product, revenue, segment="Corporate"):
    units = revenue // prices[product]
    assert units * prices[product] == revenue
    # Date in 2026
    date = f"2026-{month:02d}-{random.randint(1, 28):02d}"
    rows.append([f"ORD-{len(rows)+1:03d}", date, region, product, units, segment])

# June (Target 72880)
# 11700 (North) -> P105
add_order(6, "North", "P105", 11700)
add_order(6, "East", "P105", 18000)
add_order(6, "West", "P105", 13500)
add_order(6, "South", "P105", 9000)
add_order(6, "North", "P104", 9000)
add_order(6, "East", "P104", 6750)
add_order(6, "West", "P104", 4500)
add_order(6, "North", "P101", 45) 
add_order(6, "South", "P102", 300)
add_order(6, "South", "P101", 85) # Wait, 85 is not div by 45.

