FROM php:8.1-fpm

# Install required PHP extensions and dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www

# Copy app files to the container
COPY . .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions for Laravel files
RUN chown -R www-data:www-data /var/www

# Generate Laravel app key
RUN php artisan key:generate

# Cache config, routes, and views
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Expose port 8000
EXPOSE 8000

# Run Laravel's built-in PHP server (use CMD, not RUN)
ENTRYPOINT ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

