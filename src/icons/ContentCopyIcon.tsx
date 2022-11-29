import React, { FC, memo } from 'react';
import ContentCopySvg from '../svg/content-copy.svg';

export interface IContentCopyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentCopyIcon: FC<IContentCopyIconProps> = memo(props => {
  return <ContentCopySvg {...props} />;
});
