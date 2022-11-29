import React, { FC, memo } from 'react';
import ContentDuplicateSvg from '../svg/content-duplicate.svg';

export interface IContentDuplicateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentDuplicateIcon: FC<IContentDuplicateIconProps> = memo(props => {
  return <ContentDuplicateSvg {...props} />;
});
