#!/bin/bash
#Crear usuario para los ordenadores del IES Pazo da Mercé
#B4sicallyF0x 2024

echo "Introduce el nombre de usuario:"
read nombre_usuario
sudo mkdir /home/$nombre_usuario
cd /home
sudo chown $nombre_usuario:alumnado $nombre_usuario
chmod 777 /home/$nombre_usuario
echo Terminado!
