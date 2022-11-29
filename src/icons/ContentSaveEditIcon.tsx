import React, { FC, memo } from 'react';
import ContentSaveEditSvg from '../svg/content-save-edit.svg';

export interface IContentSaveEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveEditIcon: FC<IContentSaveEditIconProps> = memo(props => {
  return <ContentSaveEditSvg {...props} />;
});
