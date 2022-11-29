import React, { FC, memo } from 'react';
import ViewGalleryOutlineSvg from '../svg/view-gallery-outline.svg';

export interface IViewGalleryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGalleryOutlineIcon: FC<IViewGalleryOutlineIconProps> = memo(props => {
  return <ViewGalleryOutlineSvg {...props} />;
});
