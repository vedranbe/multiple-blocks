import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

const Edit = () => {
  return (
    <div {...useBlockProps()}>
      {__('Block 1 – Hello from the editor!', 'multiple-blocks')}
    </div>
  )
}

export default Edit
