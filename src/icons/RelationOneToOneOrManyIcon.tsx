import React, { FC, memo } from 'react';
import RelationOneToOneOrManySvg from '../svg/relation-one-to-one-or-many.svg';

export interface IRelationOneToOneOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToOneOrManyIcon: FC<IRelationOneToOneOrManyIconProps> = memo(props => {
  return <RelationOneToOneOrManySvg {...props} />;
});
