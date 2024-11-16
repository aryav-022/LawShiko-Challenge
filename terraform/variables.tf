variable "atlas_public_key" {
  description = "Public API key for MongoDB Atlas"
  type        = string
}

variable "atlas_private_key" {
  description = "Private API key for MongoDB Atlas"
  type        = string
}

variable "atlas_org_id" {
  description = "Organization ID for MongoDB Atlas"
  type        = string
}

variable "cluster_name" {
  description = "Name of the MongoDB Atlas Cluster"
  type        = string
}

variable "project_name" {
  description = "Name of the MongoDB Atlas Project"
  type        = string
}

variable "db_username" {
  description = "Database username"
  type        = string
}

variable "db_password" {
  description = "Database password"
  type        = string
}

variable "ip_whitelist" {
  description = "IP address or CIDR block to whitelist"
  type        = string
}
