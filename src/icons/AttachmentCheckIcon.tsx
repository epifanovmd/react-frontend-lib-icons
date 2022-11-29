import React, { FC, memo } from 'react';
import AttachmentCheckSvg from '../svg/attachment-check.svg';

export interface IAttachmentCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentCheckIcon: FC<IAttachmentCheckIconProps> = memo(props => {
  return <AttachmentCheckSvg {...props} />;
});
