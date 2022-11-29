import React, { FC, memo } from 'react';
import ContentSavePlusSvg from '../svg/content-save-plus.svg';

export interface IContentSavePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSavePlusIcon: FC<IContentSavePlusIconProps> = memo(props => {
  return <ContentSavePlusSvg {...props} />;
});
