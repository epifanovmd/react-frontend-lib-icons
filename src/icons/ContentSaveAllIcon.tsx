import React, { FC, memo } from 'react';
import ContentSaveAllSvg from '../svg/content-save-all.svg';

export interface IContentSaveAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveAllIcon: FC<IContentSaveAllIconProps> = memo(props => {
  return <ContentSaveAllSvg {...props} />;
});
