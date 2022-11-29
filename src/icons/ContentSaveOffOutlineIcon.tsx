import React, { FC, memo } from 'react';
import ContentSaveOffOutlineSvg from '../svg/content-save-off-outline.svg';

export interface IContentSaveOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveOffOutlineIcon: FC<IContentSaveOffOutlineIconProps> = memo(props => {
  return <ContentSaveOffOutlineSvg {...props} />;
});
