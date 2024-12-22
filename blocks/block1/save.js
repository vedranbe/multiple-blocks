import { useBlockProps } from '@wordpress/block-editor'

const Save = () => {
  return (
    <div {...useBlockProps.save()}>
      {'Block 1 – Hello from the saved content!'}
    </div>
  )
}

export default Save
