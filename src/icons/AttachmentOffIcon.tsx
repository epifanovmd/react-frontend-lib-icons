import React, { FC, memo } from 'react';
import AttachmentOffSvg from '../svg/attachment-off.svg';

export interface IAttachmentOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentOffIcon: FC<IAttachmentOffIconProps> = memo(props => {
  return <AttachmentOffSvg {...props} />;
});
