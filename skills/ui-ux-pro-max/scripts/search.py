import csv
import sys
import argparse
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")

def search_csv(file_path, query, domain_filter=None):
    results = []
    if not os.path.exists(file_path):
        return results
    
    with open(file_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            match = False
            for val in row.values():
                if query.lower() in str(val).lower():
                    match = True
                    break
            if match:
                results.append(row)
    return results

def main():
    parser = argparse.ArgumentParser(description="Search UI/UX Pro Max Database")
    parser.add_argument("query", help="Keywords to search for")
    parser.add_argument("--domain", help="Specific CSV to search (color, design, ux, etc.)")
    parser.add_argument("--design-system", action="store_true", help="Generate a design system brief")
    
    args = parser.parse_args()
    
    all_files = [f for f in os.listdir(DATA_DIR) if f.endswith(".csv")]
    if args.domain:
        all_files = [f for f in all_files if args.domain in f]
    
    final_output = []
    
    for filename in all_files:
        file_path = os.path.join(DATA_DIR, filename)
        matches = search_csv(file_path, args.query)
        if matches:
            final_output.append(f"\n### Findings in {filename}:")
            for m in matches[:5]: # Limit to top 5 per file
                final_output.append(str(m))
                
    if not final_output:
        print(f"No results found for '{args.query}'")
    else:
        print("\n".join(final_output))
        
    if args.design_system:
        print("\n--- DESIGN SYSTEM RECOMMENDATION ---")
        print(f"Based on '{args.query}', apply a consistent visual language from the matching results above.")

if __name__ == "__main__":
    main()
