import React, { FC, memo } from 'react';
import AttachmentMinusSvg from '../svg/attachment-minus.svg';

export interface IAttachmentMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AttachmentMinusIcon: FC<IAttachmentMinusIconProps> = memo(props => {
  return <AttachmentMinusSvg {...props} />;
});
