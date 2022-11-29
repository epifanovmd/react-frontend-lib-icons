import React, { FC, memo } from 'react';
import ContentSavePlusOutlineSvg from '../svg/content-save-plus-outline.svg';

export interface IContentSavePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSavePlusOutlineIcon: FC<IContentSavePlusOutlineIconProps> = memo(props => {
  return <ContentSavePlusOutlineSvg {...props} />;
});
