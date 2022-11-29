import React, { FC, memo } from 'react';
import TagFacesSvg from '../svg/tag-faces.svg';

export interface ITagFacesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagFacesIcon: FC<ITagFacesIconProps> = memo(props => {
  return <TagFacesSvg {...props} />;
});
