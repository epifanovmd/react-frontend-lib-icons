import React, { FC, memo } from 'react';
import ContentSaveCheckOutlineSvg from '../svg/content-save-check-outline.svg';

export interface IContentSaveCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveCheckOutlineIcon: FC<IContentSaveCheckOutlineIconProps> = memo(props => {
  return <ContentSaveCheckOutlineSvg {...props} />;
});
