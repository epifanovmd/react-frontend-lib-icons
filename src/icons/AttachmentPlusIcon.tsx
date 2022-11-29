import React, { FC, memo } from 'react';
import AttachmentPlusSvg from '../svg/attachment-plus.svg';

export interface IAttachmentPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentPlusIcon: FC<IAttachmentPlusIconProps> = memo(props => {
  return <AttachmentPlusSvg {...props} />;
});
