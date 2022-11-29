import React, { FC, memo } from 'react';
import AttachmentLockSvg from '../svg/attachment-lock.svg';

export interface IAttachmentLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentLockIcon: FC<IAttachmentLockIconProps> = memo(props => {
  return <AttachmentLockSvg {...props} />;
});
