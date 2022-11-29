import React, { FC, memo } from 'react';
import ContentSaveAllOutlineSvg from '../svg/content-save-all-outline.svg';

export interface IContentSaveAllOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveAllOutlineIcon: FC<IContentSaveAllOutlineIconProps> = memo(props => {
  return <ContentSaveAllOutlineSvg {...props} />;
});
