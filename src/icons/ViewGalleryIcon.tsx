import React, { FC, memo } from 'react';
import ViewGallerySvg from '../svg/view-gallery.svg';

export interface IViewGalleryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGalleryIcon: FC<IViewGalleryIconProps> = memo(props => {
  return <ViewGallerySvg {...props} />;
});
