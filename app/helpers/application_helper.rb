module ApplicationHelper
  def body_class
    [controller_path, action_name].compact.map { |str| str.parameterize(separator: '-') }.join(' ')
  end
end
