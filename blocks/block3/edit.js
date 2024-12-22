import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

const Edit = () => {
  return (
    <div {...useBlockProps()}>
      {__('Block Three – Hello from the editor!', 'multiple-blocks')}
    </div>
  )
}

export default Edit