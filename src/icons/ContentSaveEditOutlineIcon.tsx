import React, { FC, memo } from 'react';
import ContentSaveEditOutlineSvg from '../svg/content-save-edit-outline.svg';

export interface IContentSaveEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveEditOutlineIcon: FC<IContentSaveEditOutlineIconProps> = memo(props => {
  return <ContentSaveEditOutlineSvg {...props} />;
});
