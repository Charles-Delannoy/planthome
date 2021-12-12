# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'nokogiri'

puts 'start seeding...'
puts ''

puts 'Remove all plants...'
Plant.destroy_all
puts 'Plants removed !'

puts ''

base_url = "https://plantespourtous.co/fiches-entretien/"

base_html_doc = Nokogiri::HTML(open(base_url).read)

plants_items = base_html_doc.search('.item-container')

browser = Ferrum::Browser.new()

plants_items.each do |plant_item|
  name = plant_item.search('.item-title').text.strip
  url = plant_item.search('a').attribute('href').value
  browser.goto url
  description = browser.at_css('.ppt-care-list li:nth-child(n+2) p').text
  Plant.create!(name: name, description: description)

  puts "Added a new plant: '#{name}' Yay!"
  puts "There is now #{Plant.count} plants"
  puts ''
end

puts 'SUCCESS!'
