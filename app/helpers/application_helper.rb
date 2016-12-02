module ApplicationHelper
  def body_class
    [controller_path, action_name].compact.map { |str| str.parameterize(separator: '-') }.join(' ')
  end

  def react_component(name, props=nil, options={ tag: 'div' })
    content_tag(options[:tag], nil, class: options[:class], data: { inject_react_class: name, react_props: props.as_json })
  end
end
