ActiveAdmin.register User do
  menu parent: 'Dashboard'
  filter :email

  index do
    selectable_column

    column :email
    column :mooc_student

    actions
  end

  show do
    attributes_table do
      row :email
      row :login_token
    end
  end
end
