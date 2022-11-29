import React, { FC, memo } from 'react';
import ContentSaveSvg from '../svg/content-save.svg';

export interface IContentSaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveIcon: FC<IContentSaveIconProps> = memo(props => {
  return <ContentSaveSvg {...props} />;
});
