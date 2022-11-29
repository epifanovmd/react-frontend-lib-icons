import React, { FC, memo } from 'react';
import ContentSaveMinusSvg from '../svg/content-save-minus.svg';

export interface IContentSaveMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveMinusIcon: FC<IContentSaveMinusIconProps> = memo(props => {
  return <ContentSaveMinusSvg {...props} />;
});
