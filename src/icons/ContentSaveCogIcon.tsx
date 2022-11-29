import React, { FC, memo } from 'react';
import ContentSaveCogSvg from '../svg/content-save-cog.svg';

export interface IContentSaveCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveCogIcon: FC<IContentSaveCogIconProps> = memo(props => {
  return <ContentSaveCogSvg {...props} />;
});
