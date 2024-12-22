import { getCategories, setCategories } from '@wordpress/blocks'

// Create new category and add it first
setCategories([
  {
    slug: 'blocks',
    title: 'Multiple Blocks'
  },
  ...getCategories().filter(category => category.slug !== 'blocks')
])

// Import blocks
require('../blocks/block1')
require('../blocks/block2')
require('../blocks/block3')
