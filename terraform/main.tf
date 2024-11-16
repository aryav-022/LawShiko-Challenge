terraform {
  required_providers {
    mongodbatlas = {
      source = "mongodb/mongodbatlas"
      version = "1.21.4"
    }
  }
}

resource "mongodbatlas_project" "project" {
  org_id = var.atlas_org_id
  name   = var.project_name
}

resource "mongodbatlas_cluster" "cluster" {
  project_id   = mongodbatlas_project.project.id
  name         = var.cluster_name

  provider_name = "TENANT"
  backing_provider_name = "GCP"
  provider_region_name = "ASIA_SOUTH_1"
  provider_instance_size_name = "M0"
}

resource "mongodbatlas_database_user" "db_user" {
  username           = var.db_username
  password           = var.db_password
  project_id         = mongodbatlas_project.project.id
  roles {
    database_name = "admin"
    role_name     = "readWriteAnyDatabase"
  }
  auth_database_name = "admin"
}

resource "mongodbatlas_project_ip_access_list" "whitelist" {
  project_id = mongodbatlas_project.project.id
  ip_address = var.ip_whitelist
}
