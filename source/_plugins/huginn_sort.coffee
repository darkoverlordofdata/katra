#+--------------------------------------------------------------------+
#| huginn_sort.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2013
#+--------------------------------------------------------------------+
#|
#| This file is a part of Huginn
#|
#| Huginn is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# sort huginn-plugin
#
module.exports = (site) ->

  $by = site.sort.by ? 'date'
  $swap = switch site.sort.direction ? 'asc'
    when 'asc'
      ($a, $b) ->
        if $a[$by] > $b[$by] then 1 else if $a[$by] < $b[$by] then -1 else 0
    when 'desc'
      ($a, $b) ->
        if $a[$by] < $b[$by] then 1 else if $a[$by] > $b[$by] then -1 else 0
    else
      ($a, $b) ->
        if $a[$by] > $b[$by] then 1 else if $a[$by] < $b[$by] then -1 else 0


  site[site.sort.dest] = ($item for $item in site[site.sort.src])
  site[site.sort.dest].sort($swap)


