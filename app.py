import os

def replace_spaces_in_filenames(directory):
    try:
        for filename in os.listdir(directory):
            if ' ' in filename:
                new_filename = filename.replace(' ', '_')
                old_file = os.path.join(directory, filename)
                new_file = os.path.join(directory, new_filename)
                os.rename(old_file, new_file)
                print(f'Renamed: "{filename}" to "{new_filename}"')
        print("All file names have been updated.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the directory path here
directory_path = 'C:/Users/Sly Venegas/Downloads/PORTAFOLIO anexo/rename'

replace_spaces_in_filenames(directory_path)
