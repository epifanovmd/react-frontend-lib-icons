import React, { FC, memo } from 'react';
import ContentCutSvg from '../svg/content-cut.svg';

export interface IContentCutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentCutIcon: FC<IContentCutIconProps> = memo(props => {
  return <ContentCutSvg {...props} />;
});
