import React, { FC, memo } from 'react';
import ContentPasteSvg from '../svg/content-paste.svg';

export interface IContentPasteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentPasteIcon: FC<IContentPasteIconProps> = memo(props => {
  return <ContentPasteSvg {...props} />;
});
