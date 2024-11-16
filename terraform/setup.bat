export $(cat .env | xargs)
export $(cat .env | sed 's/^/TF_VAR_/')
terraform init
terraform destroy -auto-approve
terraform plan
terraform validate
terraform apply -auto-approve