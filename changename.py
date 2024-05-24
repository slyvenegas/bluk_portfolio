import os

def renombrar_archivos(ruta_carpeta):
    try:
        # Verificar si la ruta existe
        if not os.path.isdir(ruta_carpeta):
            print(f"La ruta {ruta_carpeta} no existe.")
            return

        # Obtener la lista de archivos en la carpeta
        archivos = os.listdir(ruta_carpeta)

        # Recorrer cada archivo en la carpeta
        for archivo in archivos:
            # Verificar si es un archivo (no una carpeta)
            ruta_completa = os.path.join(ruta_carpeta, archivo)
            if os.path.isfile(ruta_completa):
                # Crear el nuevo nombre del archivo reemplazando espacios por guiones bajos
                nuevo_nombre = archivo.replace(' ', '_')
                nueva_ruta_completa = os.path.join(ruta_carpeta, nuevo_nombre)

                # Renombrar el archivo
                os.rename(ruta_completa, nueva_ruta_completa)
                print(f"Renombrado: {archivo} -> {nuevo_nombre}")

        print("Renombrado de archivos completado.")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

# Ruta de la carpeta que contiene los archivos
ruta_carpeta = r'C:\Users\Sly Venegas\Desktop\Bluk\DEPURAR_MIGRAR\images\ids2'  # Reemplaza con la ruta real de tu carpeta

# Llamar a la función para renombrar los archivos
renombrar_archivos(ruta_carpeta)
