#!/bin/bash

FILE=/etc/nginx/conf.d/default.conf


sed -i '/index  index.html index.htm;/a \
        try_files $uri $uri\/ \/ ;' $FILE 
