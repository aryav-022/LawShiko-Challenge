output "db_username" {
  description = "MongoDB Atlas database username"
  value       = var.db_username
}

output "db_password" {
  description = "MongoDB Atlas database password"
  value     = var.db_password
}

output "connection_string" {
  description = "MongoDB Connection String"
  value = "mongodb+srv://${var.db_username}:${var.db_password}@${substr(mongodbatlas_cluster.cluster.connection_strings[0].standard_srv, 14, -1)}/?retryWrites=true&w=majority&appName=Cluster0"
}