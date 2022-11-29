import React, { FC, memo } from 'react';
import ContentSaveCheckSvg from '../svg/content-save-check.svg';

export interface IContentSaveCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveCheckIcon: FC<IContentSaveCheckIconProps> = memo(props => {
  return <ContentSaveCheckSvg {...props} />;
});
