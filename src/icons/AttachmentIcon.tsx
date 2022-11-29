import React, { FC, memo } from 'react';
import AttachmentSvg from '../svg/attachment.svg';

export interface IAttachmentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentIcon: FC<IAttachmentIconProps> = memo(props => {
  return <AttachmentSvg {...props} />;
});
