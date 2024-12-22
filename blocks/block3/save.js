import { useBlockProps } from '@wordpress/block-editor'

const Save = () => {
  return (
    <div {...useBlockProps.save()}>
      {'Block Three – Hello from the saved content!'}
    </div>
  )
}

export default Save
