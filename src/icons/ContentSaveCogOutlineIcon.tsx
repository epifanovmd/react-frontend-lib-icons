import React, { FC, memo } from 'react';
import ContentSaveCogOutlineSvg from '../svg/content-save-cog-outline.svg';

export interface IContentSaveCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveCogOutlineIcon: FC<IContentSaveCogOutlineIconProps> = memo(props => {
  return <ContentSaveCogOutlineSvg {...props} />;
});
