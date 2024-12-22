import { registerBlockType } from '@wordpress/blocks'
import Edit from './edit'
import Save from './save'

// Custom icon
const customIcon = (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      stroke-linecap='round'
      stroke-linejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      {' '}
      <path
        d='M21 0C20.4477 0 20 0.447715 20 1V2H19C18.4477 2 18 2.44772 18 3C18 3.55228 18.4477 4 19 4H20V5C20 5.55228 20.4477 6 21 6C21.5523 6 22 5.55228 22 5V4H23C23.5523 4 24 3.55228 24 3C24 2.44772 23.5523 2 23 2H22V1C22 0.447715 21.5523 0 21 0Z'
        fill='#0F0F0F'
      ></path>{' '}
      <path
        d='M22.4668 8.6169C22.297 8.09138 21.7016 7.85776 21.1936 8.07463C20.6857 8.29149 20.4525 8.87941 20.6116 9.40826C21.113 11.074 21.1224 12.8572 20.6271 14.5397C20.0373 16.5433 18.7684 18.2792 17.0383 19.4493C15.3082 20.6195 13.2247 21.1509 11.1455 20.9525C9.06631 20.754 7.121 19.8381 5.64348 18.3618C4.16596 16.8855 3.24838 14.9409 3.04821 12.8619C2.84804 10.7828 3.37778 8.69891 4.5465 6.96784C5.71522 5.23677 7.45004 3.96647 9.4532 3.37498C11.1353 2.8783 12.9184 2.88626 14.5846 3.38623C15.1136 3.54496 15.7013 3.31122 15.9178 2.80311C16.1342 2.29501 15.9001 1.69979 15.3744 1.53036C13.2759 0.853957 11.0142 0.821568 8.88488 1.4503C6.43471 2.17379 4.31277 3.72755 2.88325 5.84491C1.45373 7.96227 0.805783 10.5112 1.05062 13.0542C1.29545 15.5972 2.4178 17.9757 4.22503 19.7814C6.03225 21.5871 8.41165 22.7075 10.9548 22.9502C13.498 23.193 16.0464 22.5429 18.1626 21.1117C20.2788 19.6804 21.8308 17.5572 22.5523 15.1064C23.1792 12.9766 23.145 10.7148 22.4668 8.6169Z'
        fill='#0F0F0F'
      ></path>{' '}
      <path
        d='M11.5 9H12.2597C12.6685 9 13 9.33145 13 9.74031C13 9.90842 12.9428 10.0715 12.8378 10.2028L9.21912 14.7261C9.07727 14.9034 8.99999 15.1237 8.99999 15.3508V16C8.99999 16.5523 9.4477 17 9.99999 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H11.9089C11.7425 15 11.6489 14.8086 11.751 14.6772L14.5787 11.0417C14.8517 10.6906 15 10.2585 15 9.81378V9C15 7.89543 14.1046 7 13 7H11C9.89542 7 8.99999 7.89543 8.99999 9C8.99999 9.55228 9.4477 10 9.99999 10H10.5C10.7761 10 11 9.77614 11 9.5C11 9.22386 11.2238 9 11.5 9Z'
        fill='#0F0F0F'
      ></path>{' '}
    </g>
  </svg>
)

// Get preview image
const getPreviewImage = blockName => {
  return `${MultipleBlocks.pluginUrl}blocks/${blockName}/assets/screenshot.png`
}

// Register block
registerBlockType('multiple-blocks/block2', {
  apiVersion: 2,
  title: 'Block 2',
  icon: customIcon,
  category: 'blocks',
  description: 'Description of Block 2!',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    preview: {
      type: 'boolean',
      default: false
    }
  },
  example: {
    attributes: {
      preview: true,
      content: 'Preview content'
    }
  },
  edit: ({ attributes, setAttributes }) => {
    if (attributes.preview) {
      return (
        <img
          src={getPreviewImage('block2')}
          alt='Block Preview'
          style={{ width: '100%', height: 'auto' }}
        />
      )
    }
    return <Edit attributes={attributes} setAttributes={setAttributes} />
  },
  save: Save
})
