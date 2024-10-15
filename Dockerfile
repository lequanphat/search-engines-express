# Use the official Elasticsearch image as the base image
FROM docker.elastic.co/elasticsearch/elasticsearch:8.10.2

# Optionally add plugins
# RUN elasticsearch-plugin install <plugin_name>

# Set environment variables for Elasticsearch
ENV discovery.type=single-node

# Expose necessary ports
EXPOSE 9200 9300
