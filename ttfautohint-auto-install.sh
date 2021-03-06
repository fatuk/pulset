# Install ttfautohint on Ubuntu 12.04 LTS
# @author: Jean Lescure
# 2014/04/23

# Clone ttfautohint git repo to 'tmp' dir and cd into resulting repo folder
cd /tmp
git clone git://repo.or.cz/ttfautohint.git
cd ttfautohint

# Handle bootstrap's dependency: automake
wget http://archive.ubuntu.com/ubuntu/pool/main/a/automake1.13/automake_1.13.3-1.1ubuntu2_all.deb
sudo dpkg -i automake_1.13.3-1.1ubuntu2_all.deb

# Run bootstrap
./bootstrap

# Install ttfautohint's configure dependencies
sudo apt-get install pkg-config gcc g++ libfreetype6-dev libglib2.0-dev libcairo2-dev

# Handle ttfautohint's configure dependency: harfbuzz
wget http://www.freedesktop.org/software/harfbuzz/release/harfbuzz-0.9.19.tar.bz2
tar -xjf harfbuzz-0.9.19.tar.bz2
cd harfbuzz-0.9.19
./configure
make
sudo make install
cd ..

# Configure and install ttfautohint
./configure --with-qt=no --with-doc=no
make
sudo make install

# Remove ttfautohint temp folder
cd ..
rm -rfv ttfautohint/

# Done
echo "ttfautohint auto-install script has been run! :)"
