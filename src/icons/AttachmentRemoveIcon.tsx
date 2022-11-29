import React, { FC, memo } from 'react';
import AttachmentRemoveSvg from '../svg/attachment-remove.svg';

export interface IAttachmentRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentRemoveIcon: FC<IAttachmentRemoveIconProps> = memo(props => {
  return <AttachmentRemoveSvg {...props} />;
});
